import { AnimatedButton } from "../custom/button";

const ContactCard = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="bg-accent-primimary/10 dark:bg-accent-primimary/5 rounded-2xl border border-neutral-700 p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let&apos;s discuss how our service can help your business grow and
          succeed in the digital landscape.
        </p>
        <AnimatedButton>Let&apos;s Talk</AnimatedButton>
      </div>
    </div>
  );
};

export default ContactCard;
