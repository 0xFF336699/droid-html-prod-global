"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9489],{

/***/ 79489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaiduMapView: () => (/* binding */ BaiduMapView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71202);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);



const defaultCenter = {
    lng: 116.402544,
    lat: 39.928216
};
const defaultZoom = 10;
const defaultWatchOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
const MapWithLoader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1064), __webpack_require__.e(1009), __webpack_require__.e(6764), __webpack_require__.e(5461)]).then(__webpack_require__.t.bind(__webpack_require__, 45461, 23)).then((mod)=>{
        const { Map, MapApiLoaderHOC } = mod;
        const MapComponent = (props)=>{
            const { center = defaultCenter, zoom = defaultZoom, onDeviceLocationUpdate, onLocationError, watchPosition = false, watchOptions = defaultWatchOptions, onCenterChange, ...restProps } = props;
            const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
            const geolocationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
            const [currentCenter, setCurrentCenter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(center);
            const [hasLocated, setHasLocated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
            (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
                if (!hasLocated && navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((pos)=>{
                        const location = {
                            lng: pos.coords.longitude,
                            lat: pos.coords.latitude,
                            accuracy: pos.coords.accuracy,
                            timestamp: pos.timestamp || Date.now()
                        };
                        setCurrentCenter(location);
                        setHasLocated(true);
                        onDeviceLocationUpdate === null || onDeviceLocationUpdate === void 0 ? void 0 : onDeviceLocationUpdate(location);
                    }, (err)=>{
                        setHasLocated(true);
                        onLocationError === null || onLocationError === void 0 ? void 0 : onLocationError(err);
                    });
                }
            }, [
                hasLocated,
                onDeviceLocationUpdate,
                onLocationError
            ]);
            (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
                let watchId = null;
                if (watchPosition && navigator.geolocation) {
                    watchId = navigator.geolocation.watchPosition((pos)=>{
                        const location = {
                            lng: pos.coords.longitude,
                            lat: pos.coords.latitude,
                            accuracy: pos.coords.accuracy,
                            timestamp: pos.timestamp || Date.now()
                        };
                        onDeviceLocationUpdate === null || onDeviceLocationUpdate === void 0 ? void 0 : onDeviceLocationUpdate(location);
                    }, (err)=>{
                        onLocationError === null || onLocationError === void 0 ? void 0 : onLocationError(err);
                    }, watchOptions);
                }
                return ()=>{
                    if (watchId !== null && navigator.geolocation) {
                        navigator.geolocation.clearWatch(watchId);
                    }
                };
            }, [
                watchPosition,
                onDeviceLocationUpdate,
                onLocationError,
                watchOptions
            ]);
            const initMap = (map)=>{
                if (!map) return;
                mapRef.current = map;
                try {
                    geolocationRef.current = new BMapGL.Geolocation();
                    const realMap = map.map || map.instance;
                    if (realMap) {
                        if (realMap.enableScrollWheelZoom) realMap.enableScrollWheelZoom(true);
                        if (realMap.enableContinuousZoom) realMap.enableContinuousZoom();
                        if (realMap.enableInertialDragging) realMap.enableInertialDragging();
                    }
                    if (onCenterChange) {
                        (realMap || map).addEventListener('moveend', ()=>{
                            const c = (realMap || map).getCenter();
                            onCenterChange({
                                lng: c.lng,
                                lat: c.lat
                            });
                        });
                    }
                } catch (error) {
                    onLocationError === null || onLocationError === void 0 ? void 0 : onLocationError(error);
                }
            };
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Map, {
                ref: initMap,
                style: {
                    height: '100%',
                    width: '100%',
                    ...restProps.style
                },
                center: new BMapGL.Point(currentCenter.lng, currentCenter.lat),
                zoom: zoom,
                ...restProps
            });
        };
        return MapApiLoaderHOC({
            ak: 'MmweUMZxcXOThZUaBuQ2rtKwLNHf1Hix'
        })(MapComponent);
    }), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(45461)
            ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            style: {
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                color: '#666'
            },
            children: "地图加载中..."
        })
});
const BaiduMapView = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MapWithLoader, {
        ...props
    });
};


/***/ })

}]);
//# sourceMappingURL=9489.7a4f2b3b62574268.js.map