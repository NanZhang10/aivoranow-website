import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "aivoranow@gmail.com";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = (() => {
    const subject = encodeURIComponent(
      name ? `Hello from ${name}` : "Hello, Aivora"
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "(your name)"}${email ? ` <${email}>` : ""}`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  })();

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-white/5">
      <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-aurora-cyan/80">
            Contact
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Let's build
            <br />
            <span className="text-aurora">something useful.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Tell us about the problem you're trying to solve. Pilots, product
            partnerships, or a curious "could this work?" — we read every note.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm transition-colors hover:bg-white/[0.05]"
          >
            <Mail className="h-4 w-4 text-aurora-cyan" />
            <span className="font-medium">{EMAIL}</span>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
          className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
        >
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <Input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ada Lovelace"
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                What are you working on?
              </label>
              <Textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A short paragraph is plenty."
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              variant="aurora"
              size="lg"
              className="w-full"
            >
              Send message
              <Send className="h-4 w-4" />
            </Button>

            <p className="text-xs text-muted-foreground/70">
              Your browser will open an email draft to {EMAIL}.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
