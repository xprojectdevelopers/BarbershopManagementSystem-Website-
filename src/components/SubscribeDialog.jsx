import React, { useState } from "react";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, 
  DialogDescription, DialogFooter, DialogTrigger, DialogClose 
} from "@/components/ui/dialog";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, WarningCircle } from "phosphor-react";
import { supabase } from "@/lib/supabaseClient"; 

const SubscribeDialog = ({ trigger }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsError(true);
      setMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    if (error) {
      setIsError(true);
      setMessage(error.message);
    } else {
      setIsError(false);
      setMessage("Thanks for subscribing!");
      setEmail("");
    }

    setLoading(false);
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className="max-w-[500px] flex flex-col h-[560px] md:h-auto p-8">
        <DialogHeader className="mt-4">
          <DialogTitle className="text-center text-2xl uppercase" style={{ fontFamily: "oswald" }}>
            Molave Street's Barbers
          </DialogTitle>
          <DialogDescription className="text-center text-black text-base tracking-[0.4px] mt-3" style={{ fontFamily: "satoshi-medium" }}>
            Be the first to enjoy new services, special deals, and exciting events from Molave Street's Barbers.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-base mb-2" style={{ fontFamily: "satoshi-medium" }}>Email *</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-sm px-3 py-2 md:py-3 focus:outline-none focus:border-black"
              required
            />
          </div>

          {message && (
            <Alert 
              className="mt-4 flex items-center gap-3" 
              variant={isError ? "error" : "success"}
            >
              {isError ? (
                <WarningCircle size={24} weight="fill" className="text-red-500" />
              ) : (
                <CheckCircle size={24} weight="fill" className="text-green-500" />
              )}
              <div>
                <AlertTitle>{isError ? "Error" : "Success"}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </div>
            </Alert>
          )}


          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white text-base py-4 rounded-full hover:bg-gray-900 disabled:opacity-50 cursor-pointer"
            style={{ fontFamily: "satoshi-medium" }}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        

        <DialogFooter className="-mt-10 md:-mt-3">
          <DialogClose asChild>
            <button
              className="w-full border border-black py-4 text-base rounded-full hover:bg-gray-200 mt-6 cursor-pointer"
              style={{ fontFamily: "satoshi-medium" }}
            >
              Back
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeDialog;
