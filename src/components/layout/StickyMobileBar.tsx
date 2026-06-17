import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/** Fast bunn-bar, kun mobil: Ring + Få gratis befaring. Alltid innen tommelens rekkevidde. */
export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="flex items-center gap-3 px-5 py-3">
        <Button variant="secondary" href={site.phoneHref} className="flex-1 gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5c0 8.3 6.7 15 15 15a1.5 1.5 0 0 0 1.5-1.5v-2a1 1 0 0 0-.8-1l-3.2-.7a1 1 0 0 0-1 .4l-.8 1.1a11.5 11.5 0 0 1-5-5l1.1-.8a1 1 0 0 0 .4-1l-.7-3.2a1 1 0 0 0-1-.8Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          Ring
        </Button>
        <Button variant="primary" href="/kontakt" className="flex-1">
          Få gratis befaring
        </Button>
      </div>
    </div>
  );
}
