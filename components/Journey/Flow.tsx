import { useState, useCallback, useEffect } from "react";

import ReactFlow, { ReactFlowProvider, addEdge, isNode, removeElements, Position } from "react-flow-renderer";

import dagre from "dagre";

import { arrayOfElements } from "./initial-elements";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (elements, direction = "LR") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach(el => {
    if (isNode(el)) dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    else dagreGraph.setEdge(el.source, el.target);
  });

  dagre.layout(dagreGraph);

  return elements.map(el => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);

      el.targetPosition = isHorizontal ? Position.Left : Position.Top;
      el.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

      el.position = {
        x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    }

    return el;
  });
};

const LayoutFlow = () => {
  let [layout, setlayout] = useState("LR");

  const layoutedElements = getLayoutedElements(arrayOfElements, layout);
  const [elements, setElements] = useState(layoutedElements);

  let [zoom, setzoom] = useState(-10);
  let [show, setshow] = useState(false);

  const handleZoom = () => {
    if (window.innerWidth > 600) {
      setlayout("TB");
      setzoom(1);
    }
    setshow(true);
    setElements(layoutedElements);
  };

  const onConnect = params => setElements(els => addEdge({ ...params, type: "smoothstep", animated: true }, els));
  const onElementsRemove = elementsToRemove => setElements(els => removeElements(elementsToRemove, els));

  useEffect(() => {
    setElements(layoutedElements);
  }, [arrayOfElements]);

  const onLayout = useCallback(
    direction => {
      const layoutedElements = getLayoutedElements(elements, direction);
      setElements(layoutedElements);
      layout == "LR" ? setlayout("TB") : setlayout("LR");
    },
    [elements]
  );

  useEffect(() => {
    handleZoom();
  }, []);

  return (
    <div className='h-screen flex items-center justify-center  '>
      <div className='w-5/6  h-1/2  lg:h-4/6 lg:w-11/12 bg-orange-10 -mt-96 lg:-mt-60'>
        <button onClick={() => onLayout(layout)} className={`${true ? " animate-bounc" : " "} mb-8 float-left px-6 mr-4 py-2 font-black rounded-lg bg-blue-400 text-gray-900 text-sm hover:bg-blue-400/90`}>
          Change Layout
        </button>

        <ReactFlowProvider>{show && <ReactFlow className='mt-24 bg-zinc-800/40' paneMoveable={true} defaultZoom={zoom} zoomOnPinch={true} elements={elements} onConnect={onConnect} onElementsRemove={onElementsRemove} />}</ReactFlowProvider>
      </div>
    </div>
  );
};

export default LayoutFlow;
