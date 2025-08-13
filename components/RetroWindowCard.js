import Link from 'next/link';

export default function RetroWindowCard({ title, href, children, titlebarColor, bodyColor }) {
  const Wrapper = ({ children: inner }) => (href ? (
    <Link href={href} className="block no-underline">{inner}</Link>
  ) : (
    <div>{inner}</div>
  ));

  const style = {};
  if (titlebarColor) style['--retro-title'] = titlebarColor;
  if (bodyColor) style['--retro-body'] = bodyColor;

  return (
    <div className="retro-window" style={style}>
      <div className="retro-titlebar">
        <div className="flex items-center gap-2">
          <span className="retro-dot" />
          <span className="retro-dot" />
          <span className="retro-dot" />
        </div>
        <span className="retro-title text-sm font-bold truncate">{title}</span>
        <div className="flex items-center gap-1 opacity-70 text-xs">
          <span className="retro-square" />
          <span className="retro-square" />
          <span className="retro-square" />
        </div>
      </div>
      <Wrapper>
        <div className="retro-body">
          {children}
        </div>
      </Wrapper>
    </div>
  );
}


