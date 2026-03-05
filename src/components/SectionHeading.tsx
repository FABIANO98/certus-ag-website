import AnimateIn from './AnimateIn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimateIn className={centered ? 'text-center' : ''}>
      <div className={centered ? 'mx-auto' : ''}>
        <div
          className={`h-[3px] w-[60px] bg-blue-600 mb-4${
            centered ? ' mx-auto' : ''
          }`}
        />
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight${
            light ? ' text-white' : ''
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-lg mt-4 max-w-2xl${
              light ? ' text-gray-300' : ' text-gray-500'
            }${centered ? ' mx-auto' : ''}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </AnimateIn>
  );
}
