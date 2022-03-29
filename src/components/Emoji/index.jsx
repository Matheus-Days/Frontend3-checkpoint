export function Emoji({size, label, mr, children}) {
  return <span aria-label={label} style={{fontSize: size, marginRight: mr}}>{children}</span>
}