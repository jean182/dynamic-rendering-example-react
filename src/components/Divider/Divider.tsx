interface IDividerProps {
  marginX?: number
  marginY?: number
}

export default function Divider({
  marginX,
  marginY,
}: IDividerProps) {
  const xValue = marginX ? ` mx-${marginX}` : ''
  const yValue = marginY ? ` my-${marginY}` : ''

  return <hr className={`dropdown-divider${xValue.concat(yValue)}`} />
}
