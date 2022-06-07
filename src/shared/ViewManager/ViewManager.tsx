import { useState, forwardRef, useImperativeHandle } from 'react';

export type Views = Record<string, JSX.Element>;

export interface ViewManagerProps {
  views: Views;
  defaultView?: string;
}

export interface ViewManagerHandle {
  setView: (view: string) => void;
  back: () => void;
}

export const ViewManager = forwardRef<ViewManagerHandle, ViewManagerProps>(
  ({ views, defaultView = '' }, ref) => {
    const [currentView, setCurrentView] = useState<string>(defaultView);
    const [previousView, setPreviousView] = useState<string>('');

    useImperativeHandle(ref, () => ({
      setView: (view: string) => {
        setPreviousView(currentView);
        setCurrentView(view);
      },
      back: () => {
        setCurrentView(previousView);
      },
    }));

    return views[currentView];
  }
);
