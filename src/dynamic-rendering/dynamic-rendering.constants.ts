import { Button, Card, Container, Divider, Input } from "../components";

export type JsonComponent = React.ComponentType<any>;

export const Components: Record<
  "Button" | "Card" | "Container" | "Divider" | "Input",
  JsonComponent
> = {
  Button,
  Card,
  Container,
  Divider,
  Input,
};

export type ComponentType = keyof typeof Components;
