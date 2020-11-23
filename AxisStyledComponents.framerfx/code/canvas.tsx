// WARNING: this file is auto generated, any changes will be lost
import { createDesignComponent, CanvasStore } from "framer"
const canvas = CanvasStore.shared(); // CANVAS_DATA;

export const colors = Object.freeze({
    /** #F0F6E8 */
    "green_50": "var(--token-cd23df2a-01a4-4313-8bf6-5f75fdfa1cbd, rgb(240, 246, 232))",
    /** #E6F1D6 */
    "green_100": "var(--token-5d987784-f450-4fc0-91ef-956141546b8f, rgb(230, 241, 214))",
    /** #7BC01B */
    "green_500": "var(--token-cbc8663f-764a-4426-911e-a2ff19824288, rgb(123, 192, 27))",
    /** #F1D9DA */
    "red_50": "var(--token-596acad0-d3a5-46d2-81c9-5fd6bb389348, rgb(241, 217, 218))",
    /** #EDC2C0 */
    "red_100": "var(--token-34b7e5c0-f975-4f61-b43d-30111988fef7, rgb(237, 194, 192))",
    /** #E28476 */
    "red_300": "var(--token-210b7dd9-5603-4b93-985d-60f14cadab0b, rgb(226, 132, 118))",
    /** #FF0033 */
    "red_500": "var(--token-10cdcc4d-4dd9-4af7-a452-7b7625d8714b, rgb(255, 0, 51))",
    /** #D32F2F */
    "red_700": "var(--token-f890590b-a071-4a8a-b908-b20e23f0399a, rgb(211, 47, 47))",
    /** #FF0033 */
    "red_accent": "var(--token-1743cc3d-dcef-43cc-b6ba-34e5e98413d2, rgb(255, 0, 51))",
    /** #FFFAE9 */
    "yellow_200": "var(--token-002b1ca8-3a2d-4d1d-9758-90c0383ffdb4, rgb(255, 250, 233))",
    /** #FFF0C5 */
    "yellow_300": "var(--token-4fa1f8a4-57fa-43b0-be85-bf7cf2f72b4d, rgb(255, 240, 197))",
    /** #FFDB6E */
    "yellow_400": "var(--token-782ba431-7642-4f72-a5ce-a285c273c53a, rgb(255, 219, 110))",
    /** #FFCC33 */
    "yellow_500": "var(--token-a6b82148-caaa-4be5-82e3-105a23b152b6, rgb(255, 204, 51))",
    /** #E7AC00 */
    "yellow_600": "var(--token-ba815603-9760-4e85-ad3b-eaeb7705abf8, rgb(231, 172, 0))",
    /** #BC8D00 */
    "yellow_700": "var(--token-0af4adbf-62f9-44c3-b6bc-7f7331c2031c, rgb(188, 141, 0))",
    /** #8D6900 */
    "yellow_800": "var(--token-cb1568a5-cc6f-4a6f-83e6-7a52ae920283, rgb(141, 105, 0))",
    /** #473600 */
    "yellow_900": "var(--token-70610db5-5e47-470b-b169-98352f78b9e1, rgb(71, 54, 0))",
    /** #FFCC33 */
    "yellow_accent": "var(--token-0f6dc471-8b15-477a-b366-f8d364b6db35, rgb(255, 204, 51))",
    /** #EFF9FF */
    "blue_200": "var(--token-a3ec3f05-9967-4f33-accf-286b38e2a039, rgb(239, 249, 255))",
    /** #D0EEFB */
    "blue_300": "var(--token-8388db40-e352-4394-81df-a1a3e652545c, rgb(208, 238, 251))",
    /** #72CDF4 */
    "blue_400": "var(--token-0ba6aa13-db85-4590-a281-e8abfe3c70e7, rgb(114, 205, 244))",
    /** #009DDC */
    "blue_500": "var(--token-04239383-bc8d-481f-9aec-400a1d050c57, rgb(0, 157, 220))",
    /** #00719E */
    "blue_600": "var(--token-fe72bd21-016a-4c6b-896e-6374380eb92f, rgb(0, 113, 158))",
    /** #004966 */
    "blue_700": "var(--token-018995f6-2389-407c-ac29-cd758c5410cb, rgb(0, 73, 102))",
    /** #003347 */
    "blue_800": "var(--token-9efe18fe-4793-4e6d-91b7-37a800ce20e3, rgb(0, 51, 71))",
    /** #002533 */
    "blue_900": "var(--token-51c7d72d-39ff-4503-85e2-670563c736fa, rgb(0, 37, 51))",
    /** #009DDC */
    "blue_accent": "var(--token-7069cea9-c526-4eed-a461-56c6d021e970, rgb(0, 157, 220))",
    /** #F3F3F3 */
    "grey_50": "var(--token-7c058edc-a0eb-4b73-8bb7-2ef9aa0cc0d9, rgb(243, 243, 243))",
    /** #E6E6E6 */
    "grey_100": "var(--token-ac57e9d9-1f55-41ba-bfdf-1ed0d5a3c241, rgb(230, 230, 230))",
    /** #C8C8C8 */
    "grey_200": "var(--token-293e86f9-e249-4aba-b0c3-4d8b25a922e7, rgb(200, 200, 200))",
    /** #A0A0A0 */
    "grey_300": "var(--token-8dd5b48e-b6e0-42f4-bae1-a46b8fd80542, rgb(160, 160, 160))",
    /** #828282 */
    "grey_400": "var(--token-a513e690-d4ce-46b1-b9a8-feeb85fc2947, rgb(130, 130, 130))",
    /** #646464 */
    "grey_500": "var(--token-532dbe50-782b-42ab-a9b2-5ce7d0465069, rgb(100, 100, 100))",
    /** #505050 */
    "grey_600": "var(--token-5c0a3096-b884-4cda-8441-776530912772, rgb(80, 80, 80))",
    /** #282828 */
    "grey_700": "var(--token-c529d5cf-4dec-4f31-83de-a082054e5190, rgb(40, 40, 40))",
    /** #141414 */
    "grey_800": "var(--token-981ca5e7-9e15-4cf3-a437-068457196bfe, rgb(20, 20, 20))",
    /** rgba(0, 0, 0, 0.8) */
    "grey_900": "var(--token-783ed02b-ae41-415f-a0b7-a6abba16e80c, rgba(0, 0, 0, 0.8))",
})
