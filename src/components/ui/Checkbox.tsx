import { cn } from "@/lib/utils/cn";

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  id: string;
  label: React.ReactNode;
};

export function Checkbox({ id, label, className, ...props }: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
      <input
        id={id}
        type="checkbox"
        className={cn("mt-0.5 size-5 shrink-0 rounded-sm accent-clay", className)}
        {...props}
      />
      <span className="text-body-sm text-warm-grey">{label}</span>
    </label>
  );
}
