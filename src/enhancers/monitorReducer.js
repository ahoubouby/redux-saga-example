const round = number => Math.round(number * 100) / 100
const styles = [
    'color: green',
    'background: yellow',
    'font-size: 11px',
].join(';')
const log = v => console.log(`%c ${v}`, styles);
const monitorReducerEnhancer =
    createStore => (reducer, initialState, enhancer) => {
        const monitoredReducer = (state, action) => {
            const start = performance.now();
            const newState = reducer(state, action);
            const end = performance.now();
            const diff = round(end - start);
            log(`action: ${action.type} | time: ${diff}ms | NewState: ${JSON.stringify(newState)}`);
            return newState;
        }

        return createStore(monitoredReducer, initialState, enhancer);
    }

export default monitorReducerEnhancer;