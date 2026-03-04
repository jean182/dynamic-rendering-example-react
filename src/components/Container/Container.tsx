import React from "react";

interface IContainer {
  fluid?: boolean
  children: React.ReactNode
}

export default function Container({
  children,
  fluid = false,
}: IContainer) {
  const containerClass = fluid ? 'container-fluid' : 'container'

  return (
    <div className={containerClass}>
      {children}
    </div>
  )
}
