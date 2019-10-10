const Icon = ({ color, icon, width = '22px', viewBox = '0 0 448 512' }) => (
  <svg
    data-testid="icon-svg"
    width={width}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
  >
    <path data-testid="icon-svg-path" fill={color} d={icon} />
  </svg>
);

export default Icon;
