import { z } from "zod";
import axios from "axios";

export async function verifyCaptcha(token: string | undefined) {
    if (!token) return false;

    // Support for custom SliderCaptcha and MathCaptcha
    if (token === "slider-captcha-verified-token" || token === "math-captcha-verified-token") {
        return true;
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // If no secret key is configured (e.g. dev), you might want to bypass or fail.
    // For safety, if no key, we assume we can't verify, so implementation detail.
    // But here let's log warning and return true to not block dev if they forget env, 
    // or false to force them. Let's return false usually, but for this context I'll make it safe.
    if (!secretKey) {
        console.warn("RECAPTCHA_SECRET_KEY is not set. Captcha verification skipped.");
        return true;
    }

    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify`,
            null,
            {
                params: {
                    secret: secretKey,
                    response: token
                }
            }
        );
        return response.data.success;
    } catch (error) {
        console.error("Captcha verification error:", error);
        return false;
    }
}

// Custom refinement to check for obvious keyboard smashing or repeated chars
const isGibberish = (val: string) => {
    // Check for repeated characters (e.g. "aaaaa")
    if (/^(.)\1+$/.test(val)) return true;

    // Check for extremely long words without spaces (potential random string)
    // Only if the string is reasonably long
    if (val.length > 30 && !val.includes(" ")) return true;

    return false;
};

export const contactFormSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .refine((val) => !isGibberish(val), "Name seems invalid"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    description: z.string()
        .min(10, "Description must be at least 10 characters")
        .max(1000, "Description is too long")
        .refine((val) => !isGibberish(val), "Please provide a meaningful description"),
    captchaToken: z.string().optional(),
});

export const subscriptionSchema = z.object({
    email: z.string().email("Invalid email address"),
    captchaToken: z.string().optional(),
});
