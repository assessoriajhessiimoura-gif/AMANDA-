import { Instagram } from 'lucide-react';
import WhatsAppLogo from '@/components/icons/WhatsAppLogo';
import { INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/links';

type Platform = 'instagram' | 'whatsapp';
type Variant = 'compact' | 'large';

interface SocialButtonProps {
  platform: Platform;
  variant?: Variant;
}

const PLATFORMS = {
  instagram: {
    href: INSTAGRAM_URL,
    name: 'Instagram',
    ariaLabel: 'Abrir o Instagram da Amanda Lívia em nova aba',
    detail: '@amandaesteticabeauty',
  },
  whatsapp: {
    href: WHATSAPP_URL,
    name: 'WhatsApp',
    ariaLabel: 'Abrir conversa no WhatsApp com a Amanda Lívia',
    detail: WHATSAPP_DISPLAY,
  },
} as const;

const VARIANT_CLASSES: Record<Variant, string> = {
  compact:
    'h-11 w-11 justify-center rounded-full border border-beige/80 bg-white/90 text-coffee',
  large:
    'w-full justify-center gap-4 rounded-full border border-gold/50 bg-white px-6 py-4 text-coffee sm:w-auto sm:min-w-[17rem] sm:px-8 sm:py-5',
};

export default function SocialButton({ platform, variant = 'large' }: SocialButtonProps) {
  const config = PLATFORMS[platform];
  const isCompact = variant === 'compact';
  const logoClass = isCompact ? 'h-5 w-5' : 'h-7 w-7';

  const logo =
    platform === 'instagram' ? (
      <Instagram className={`social-logo shrink-0 text-coffee ${logoClass}`} strokeWidth={1.8} aria-hidden="true" />
    ) : (
      <WhatsAppLogo className={`social-logo shrink-0 text-[#25D366] ${logoClass}`} />
    );

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={config.ariaLabel}
      className={`social-btn group inline-flex items-center ${VARIANT_CLASSES[variant]}`}
    >
      {logo}
      {!isCompact && (
        <span className="flex flex-col items-start text-left leading-tight">
          <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em]">{config.name}</span>
          <span className="mt-1 font-sans text-sm text-coffee/70">{config.detail}</span>
        </span>
      )}
    </a>
  );
}
