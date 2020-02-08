import { useState, useRef, useEffect } from 'react';

/*
* This hook is mostly copied from this blog post.
* Read it if you want to get a better understanding of how it works.
* https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
*
* To use this, add `const [ref, entry] = useIntersect({});` to your component.
* Next add `ref={ref}` to the node you want to observe.
*/

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  const effect = () => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const observerOptions = { root, rootMargin, threshold };

    observer.current = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),
      observerOptions,
    );

    const { current: currentObserver } = observer;

    if (node) {
      currentObserver.observe(node);
    }

    return () => currentObserver.disconnect();
  }

  useEffect(effect, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};
