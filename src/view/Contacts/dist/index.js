"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var index_1 = require("../Layout/index");
var contact_module_css_1 = require("./contact.module.css");
var index_2 = require("../../socket/index");
var api_1 = require("../../api/api");
var Content = antd_1.Layout.Content, Sider = antd_1.Layout.Sider;
var userId = sessionStorage.getItem("userId");
function Contacts() {
    var _this = this;
    var navigate = react_router_dom_1.useNavigate();
    var _a = index_1.useLayout(), roomId = _a.roomId, setRoomId = _a.setRoomId;
    var contactList = react_redux_1.useSelector(function (state) { return state.userMessage.user; });
    var handleAddFriends = function () {
        navigate("/layout/contacts/seachuser");
    };
    var toUserDetials = function (userid) {
        navigate("/layout/contacts/userdetails/" + userid);
    };
    var createOrGetRoomId = function (userId2) { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.api.post("http://localhost:4000/api/roomId", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            userIds: {
                                userId1: Number(userId),
                                userId2: Number(userId2)
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status === 404) {
                        throw new Error("用户不存在");
                    }
                    data = response.data;
                    return [2 /*return*/, data.roomId];
                case 2:
                    error_1 = _a.sent();
                    console.error("获取房间ID时出错：", error_1);
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var connectToChatRooms = function (friends) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                friends.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                    var newroomId, roomid, newRoomID;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, createOrGetRoomId(String(item.phoneNumber))];
                            case 1:
                                newroomId = _a.sent();
                                roomid = {
                                    myid: userId,
                                    otherid: String(item.phoneNumber),
                                    roomid: newroomId
                                };
                                // 检查是否已经包含相同的房间信息
                                if (!roomId.some(function (existingRoom) {
                                    return (existingRoom === null || existingRoom === void 0 ? void 0 : existingRoom.myid) === roomid.myid &&
                                        (existingRoom === null || existingRoom === void 0 ? void 0 : existingRoom.otherid) === roomid.otherid &&
                                        (existingRoom === null || existingRoom === void 0 ? void 0 : existingRoom.roomid) === roomid.roomid;
                                })) {
                                    newRoomID = __spreadArrays(roomId, [roomid]);
                                    setRoomId(newRoomID);
                                    index_2["default"].emit("join", newroomId);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); };
        try {
            var friends = Array.isArray(contactList === null || contactList === void 0 ? void 0 : contactList.friends)
                ? contactList.friends
                : [];
            console.log("userId:", userId);
            connectToChatRooms(friends);
        }
        catch (error) {
            console.log("connect error:", error);
        }
    }, []);
    return (react_1["default"].createElement(Content, { className: contact_module_css_1["default"].main },
        react_1["default"].createElement(antd_1.Layout, { className: contact_module_css_1["default"].layout },
            react_1["default"].createElement(Sider, { width: 400, style: {
                    backgroundColor: "transparent",
                    fontSize: "20px"
                } },
                react_1["default"].createElement("div", { id: "scrollableDiv", style: {
                        height: "100%",
                        overflow: "auto",
                        padding: "0 16px",
                        marginLeft: "20px",
                        border: "1px solid rgba(140, 140, 140, 0.35)"
                    } },
                    react_1["default"].createElement(antd_1.Button, { size: "large", onClick: handleAddFriends, ghost: true, style: {
                            width: "100%",
                            borderColor: "rgba(140, 140, 140, 0.35)",
                            marginTop: "10px"
                        } }, "ADD"),
                    Array.isArray(contactList === null || contactList === void 0 ? void 0 : contactList.friends) &&
                        contactList.friends.map(function (item) {
                            return (react_1["default"].createElement(antd_1.Card, { style: {
                                    marginTop: "1rem",
                                    padding: "1%"
                                }, onClick: function () { return toUserDetials(item._id); }, key: item._id },
                                react_1["default"].createElement(antd_1.Avatar, { src: "http://localhost:4000" + item.avatar, icon: react_1["default"].createElement(icons_1.UserOutlined, null), size: 50, style: { float: "left" } }),
                                react_1["default"].createElement("div", { style: { marginLeft: "20%" } },
                                    react_1["default"].createElement("div", { style: { lineHeight: "2.2rem", fontSize: "1.5rem" } }, item.roomId))));
                        }))),
            react_1["default"].createElement(Content, null,
                react_1["default"].createElement(react_router_dom_1.Outlet, null)))));
}
exports["default"] = Contacts;
