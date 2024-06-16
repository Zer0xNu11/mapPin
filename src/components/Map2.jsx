import { GoogleMap, LoadScript, Marker, MarkerClusterer } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const Map = () => {
  
  const defaultLatLng = {
    lat: 35.658584,
    lng: 139.745433,

    //地図の真ん中に表示させたい場所の緯度、経度を連数配列に
  };

  const places = [
    { info: "info1", location: { lat: 35.77231507226699, lng: 139.76465907421874 } },
    { info: "info2", location: { lat: 35.69922126927832, lng: 139.7443887168093 } },
  ];

  

  const containerStyle = {
    width: "400px",
    height: "400px",

    //地図の幅と高さを連想配列にします。
    //ちなみにこのライブラリの地図はmapContainerStyleイベントでしか
    //サイズ変更できません(多分)
  };

  const [markers, setMarkers] = useState(places);

  function handleMapClick(e) {
    //クリックイベント座標取得
    setMarkers([
      ...markers,
      { info: 'infomation',
        location:{
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        }
      },
    ]);
    console.log(markers);
  }

  // CustomMarkerClusterer
  const clusterStyles = [
    {
      textColor: "black",
      url: "logo512.png",
      height: 50,
      width: 50,
    },
    {
      textColor: "white",
      url: "logo512.png",
      height: 50,
      width: 50,
    },
    {
      textColor: "white",
      url: "logo512.png",
      height: 50,
      width: 50,
    }
  ];

  const options = {
    gridSize: 50, //小さいほど細かくクラスター化される
    styles: clusterStyles,
    maxZoom: 5, //クラスター化が行われる最大のズームレベルこの値を超えると、個別のマーカーが表示される
  };


  return (
    <>
      <div>地図</div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_APIKEY}>
        <GoogleMap
          center={defaultLatLng}
          zoom={18} //zoomでデフォルトで表示される地図の範囲を指定します。大きいほどズーム
          mapContainerStyle={containerStyle} //地図サイズ読み込み
          onClick={handleMapClick} //地図クリックでマーカー追加
        >
          <MarkerClusterer options = {options}>
           {clusterer=>//レンダリング関数
             markers && markers.map((marker) =>  <Marker
             key = {`${marker.location.lat * marker.location.lng}`} //座標の積をkeyに設定
            //  clusterer={clusterer}
             position={{lat: marker.location.lat, lng: marker.location.lng}} 
             clusterer={clusterer}
             icon={{
              url: 'pin1.svg',
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
             }}
             />)}
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
