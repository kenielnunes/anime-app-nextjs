import { useState } from "react";
import Cookies from "js-cookie";

interface MyArrayItem {
    value: string;
}

const MyComponent: React.FC = () => {
    let array = Cookies.get("myArray");
    if (array) {
        array = JSON.parse(array);
    } else {
        array = [];
    }
    const [myArray, setMyArray] = useState<MyArrayItem[]>(array);

    const handleClick = () => {
        setMyArray([...myArray, { value: "new value" }]);
        Cookies.set("myArray", JSON.stringify(myArray));
    };

    return (
        <div>
            <button onClick={handleClick}>Add to Array</button>
            <p>
                Array: {myArray.length <= 0 ? JSON.stringify(myArray) : "nada"}{" "}
            </p>
        </div>
    );
};
export default MyComponent;
