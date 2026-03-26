"use server";

import dbConnect from "@/lib/db";
import { Contact } from "@/models/contact";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";

export async function createContact(formData) {
  try {
    await dbConnect();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return {
      success: true,
      message: "message sent successfully",
      contactId: contact._id.toString(),
    };
  } catch (error) {
    console.error("errors creating contact:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again",
    };
  }
}
