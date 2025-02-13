import type { ReactNode, ReactElement } from 'react';
import type { PiralCustomExtensionSlotMap } from './custom';

/**
 * The mapping of the existing (known) extension slots.
 */
export interface PiralExtensionSlotMap extends PiralCustomExtensionSlotMap {}

/**
 * The basic props for defining an extension slot.
 */
export interface BaseExtensionSlotProps<TName, TParams> {
  /**
   * The children to transport, if any.
   */
  children?: ReactNode;
  /**
   * Defines what should be rendered when no components are available
   * for the specified extension.
   */
  empty?(): ReactNode;
  /**
   * Defines how the provided nodes should be rendered.
   * @param nodes The rendered extension nodes.
   */
  render?(nodes: Array<ReactNode>): ReactElement<any, any> | null;
  /**
   * The custom parameters for the given extension.
   */
  params?: TParams;
  /**
   * The name of the extension to render.
   */
  name: TName;
}

/**
 * Gives the extension params shape for the given extension slot name.
 */
export type ExtensionParams<TName> = TName extends keyof PiralExtensionSlotMap
  ? PiralExtensionSlotMap[TName]
  : TName extends string
  ? any
  : TName;

/**
 * The props for defining an extension slot.
 */
export type ExtensionSlotProps<TName = string> = BaseExtensionSlotProps<
  TName extends string ? TName : string,
  ExtensionParams<TName>
>;
