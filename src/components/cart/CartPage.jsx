import React from "react";
import { PlusIcon, MinusIcon, XCircle, Info } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "@/utils/cartSlice";

const shippingEstimate = 5.0;
const taxEstimate = 8.32;

const CartPage = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemoveCartItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantity = (type, id) => {
    dispatch(
      type === "decrement" ? decrementQuantity(id) : incrementQuantity(id)
    );
  };

  const handleCheckout = async () => {
    const response = await fetch(
      "http://localhost:4242/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems, totalAmount:total }), // Send total amount
      }
    );

    if (!response.ok) {
      console.error("Failed to create checkout session");
      return; // Handle error appropriately
    }

    const { sessionId } = await response.json();
    const stripe = Stripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // Access Stripe key from env

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error("Error during checkout:", error);
      // Consider displaying an error message to the user
    } else {
      saveOrder(sessionId, totalAmount); // Include totalAmount here
    }
  };

  async function saveOrder(sessionId, totalAmount) {
    const response = await fetch("/save-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId, totalAmount }), // Send total amount to be saved
    });

    const data = await response.json();
    if (data.success) {
      console.log("Order saved:", data.orderData);
    } else {
      console.error("Failed to save order:", data.error);
    }
  }

  async function saveOrder(sessionId) {
    const response = await fetch("/save-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId }),
    });

    const data = await response.json();
    if (data.success) {
      console.log("Order saved:", data.orderData);
    } else {
      console.error("Failed to save order:", data.error);
    }
  }

  const cartItems = items;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const calculateTotal = () => {
    return subtotal + shippingEstimate + taxEstimate;
  };
  const total = calculateTotal();

  const totalDiscount = cartItems.reduce((totalDiscount, item) => {
    const discountAmount =
      (item.price * item.discountPercentage * item.quantity) / 100;
    return totalDiscount + discountAmount;
  }, 0);

  return (
    <div className="p-8 mt-16 z-30">
      {cartItems.length > 0 && (
        <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full lg:w-full">
          {cartItems.length === 0 ? (
            <p className="text-lg text-red-500 text-center pt-[15%]">
              Your cart is empty! Add item to get started.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4 h-56"
              >
                <div className="flex items-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-56 h-56 rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.selectedSize && (
                      <p className="text-gray-500 pt-1">
                        Size - {item.selectedSize}
                      </p>
                    )}
                    <p className="text-sm font-medium text-gray-700 pt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-green-500 pt-1">
                      {item.availabilityStatus}
                    </p>
                    <p className="text-sm text-red-900 pt-1">
                      Discount - {item.discountPercentage} %
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center space-x-2  mr-20">
                    <h1 className="text-sm">Qty:</h1>
                    <button
                      onClick={() => handleQuantity("decrement", item.id)}
                      className="p-1 w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200"
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon className="w-4 h-4 text-gray-600" />
                    </button>

                    <p className="text-lg font-medium">{item.quantity}</p>
                    <button
                      onClick={() => handleQuantity("increment", item.id)}
                      className="p-1 w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200 "
                      aria-label="Increase quantity"
                    >
                      <PlusIcon className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => handleRemoveCartItem(item)}
                      className="w-6 h-6 text-red-950 hover:text-red-700 pt-1"
                      aria-label="Remove item"
                    >
                      <XCircle />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="w-full md:w-6/12 outline-none shadow-none p-6 rounded-lg mt-8">
            <h3 className="text-4xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total discount</span>
              <span className="text-gray-900">${totalDiscount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 flex items-center">
                Shipping estimate <Info className="ml-1 w-4 h-4" />
              </span>
              <span className="text-gray-900">
                ${subtotal > 0 ? shippingEstimate.toFixed(2) : 0}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600 flex items-center">
                Tax estimate <Info className="ml-1 w-4 h-4" />
              </span>
              <span className="text-gray-900">
                ${subtotal > 0 ? taxEstimate.toFixed(2) : 0}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Order Total</span>
              <span>${subtotal > 0 ? total.toFixed(2) : 0}</span>
            </div>
            <Button
              variant="primary"
              onClick={handleCheckout}
              className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700 text-lg"
              aria-label="Proceed to checkout"
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
