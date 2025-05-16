import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

// Create transporter object for sending emails
const transporter = nodemailer.createTransport({
  // Configure for mail provider in production
  host: "smtp.ethereal.email",  // Ethereal for development/test
  port: 587,
  secure: false,
  auth: {
    user: "your-email@example.com", // would be replaced with actual credentials
    pass: "your-password"           // would be replaced with actual credentials
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body using the contact schema
      const validatedData = contactSchema.parse(req.body);
      
      // Process the contact form submission
      const contact = await storage.createContact(validatedData);
      
      // In a production environment, this would be configured with real credentials
      // and would send an actual email
      /*
      // Create email content with the form data
      const mailOptions = {
        from: '"Northeast Laser Restoration" <info@northeastlaserrestoration.co.uk>',
        to: "your-email@example.com", // Replace with your email
        subject: `New Contact Form Submission: ${validatedData.service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Service Interest:</strong> ${validatedData.service}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\\n/g, '<br>')}</p>
        `
      };
      
      // Send the email
      await transporter.sendMail(mailOptions);
      */
      
      // Log the form data for now
      console.log("Contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        message: validatedData.message
      });
      
      // Return a success response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        id: contact.id 
      });
      
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Handle other errors
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
