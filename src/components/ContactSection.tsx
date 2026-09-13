import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-border bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Oversized section title */}
          <h2 className="font-sans font-bold uppercase tracking-tighter leading-none text-foreground text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Contact
          </h2>

          <div className="h-px bg-border mt-8 mb-16" />

          {/* Tagline */}
          <p className="font-bold text-3xl md:text-5xl leading-tight text-foreground max-w-2xl mb-16">
            Got A Project?
            <br />
            Let&apos;s Talk.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Have an idea or opportunity? Let's build something great together. 
                Whether it's a project collaboration, job opportunity, or just a 
                friendly hello, I'd love to hear from you!
              </p>

              {/* Contact Links */}
              <div className="space-y-4">
                <a
                  href="mailto:abhinavgautam898@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-foreground/40 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-foreground group-hover:border-b group-hover:border-foreground transition-colors duration-300">
                      abhinavgautam898@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhinav-gautam-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-foreground/40 transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      LinkedIn
                    </p>
                    <p className="text-foreground group-hover:border-b group-hover:border-foreground transition-colors duration-300">
                      abhinav-gautam-dev
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/abhinav-gautam01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 group-hover:border-foreground/40 transition-colors duration-300">
                    <Github className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      GitHub
                    </p>
                    <p className="text-foreground group-hover:border-b group-hover:border-foreground transition-colors duration-300">
                      abhinav-gautam01
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium rounded-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
