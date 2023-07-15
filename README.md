<div align="center">
  <h1>react-common-modal-module</h1>
  <p>React Context API를 이용한 공통 Modal component 입니다.</p>
</div>

## Install

```bash
npm install react-common-modal-module
# or
yarn add react-common-modal-module
```

## Usage

### ContextProvider 설정

```jsx live
// root index.jsx or App.jsx...
// ...
import { ModalContextProvider } from "react-common-modal-module";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ModalContextProvider>
        <App />
    </ModalContextProvider>
);
```

### OpenModal

```jsx live
import { useModal } from "react-common-modal-module";

function App() {
    const { openModal } = useModal();

    const handleOpenModal = () => {
        openModal(<div>Modal Component</div>);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>open modal</button>
        </div>
    );
}
```

### 맵위에 마커 클러스터 올리기

```jsx live
function(){
  return (
    <Map
      center={{ lat: 36.2683, lng: 127.6358 }}
      style={{ width: "100%", height: "360px" }}
      level={14}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={10}
      >
        {clusterPositionsData.positions.map((pos) => (
          <MapMarker
            key={`${pos.lat}-${pos.lng}`}
            position={pos}
          />
        ))}
      </MarkerClusterer>
    </Map>
  )
}
```

## Documentation

-   [Tutorial](https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro)
-   [Sample](https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample)
-   [API](https://react-kakao-maps-sdk.jaeseokim.dev/docs/api)

## Working list

-   Map
    -   Marker
    -   InfoWindow
    -   CustomOverlay
    -   MarkerClusterer
    -   AbstractOverlay
    -   Shape
        -   Circle, Polyline, Polygon, Rectangle, Ellipse
    -   DrawingBox
-   Roadview
    -   Marker
    -   InfoWindow
    -   CustomOverlay
-   StaticMap

## Contribute

ISSUE와 PR 대환영 입니다..!!
