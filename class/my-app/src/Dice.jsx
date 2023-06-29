import React, { useMemo, useState } from "react";

/**
 * A function that generates and returns a number between 1 and 6.
 */
function generateDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * TODO: Explain in detail (step-by-step) what happens when the user clicks on the Reroll button.
 * Write it below:
 * Step 1: User clicks on reroll
 * Step 2: The handleClick function is called which updates the counter value 
 * Step 3: The component re-renders because the counter has incremented (the state changed)
 * The diceRolls variable is calculated using the useMemo hook as it's dependent on handle click the value will recalculated
 * whenever the handle click changes
 * ... Add more steps as you need
 *
 *
 * TODO: Explain: What is the difference between useCallback and useMemo
 *  In this example : useMemo is used to memoize the array of dice rolls, 
 * ensuring that the array is only recalculated when the handleClick function changes. 
 * By providing the dependency array, the diceRolls array will not be recalculated on every render unless the handleClick function changes.
 *
 * 
 * The difference between useCallback and useMemo is that useCallback is used to memoize functions, whereas useMemo is used to memoize values. 
 * useCallback returns a memoized version of the function, while useMemo returns a memoized value.
 *
 * TODO: After you're done with the above. Make sure you play around with the component to
 * make sure you understand how useMemo is working with and without the dependency array.
 */
const Dice = () => {
    const [counter, setCounter] = useState(0);
    const age = 10;

    const handleClick = () => {
        setCounter((currCounter) => currCounter + 1);
    };

    // const diceRolls = new Array(6).fill(null).map((el) => generateDiceNumber());

    const diceRolls = useMemo(() => new Array(6).fill(null).map((el) => generateDiceNumber()), [handleClick]);

    return (
        <div>
            <h1>Dice Roller</h1>

            <h2>{`You have rolled ${counter} times`}</h2>

            <h2>{JSON.stringify(diceRolls)}</h2>

            <button onClick={handleClick}>Reroll</button>
        </div>
    );
};

export default Dice;
