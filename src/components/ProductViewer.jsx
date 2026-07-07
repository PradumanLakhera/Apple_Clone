import clsx from "clsx";
import useMacbookStore from "../store";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <p className="text-white">Render Canvas</p>

      <div className="controls">
        <p className="info">
          MacBook Pro 16" in Silver / Space Black
        </p>

        <div className="control-row">
          {/* Color Picker */}
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />

            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>

          {/* Size Picker */}
          <div className="size-control">
            <button onClick={() => setScale(14)}>14"</button>
            <button onClick={() => setScale(16)}>16"</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;