import {
    CLASS_CHAIN,
    ACCESSIBILITY_ID,
    PREDICATE_STRING
} from './selector-types.js'

const generateMobileLocator = (locatorType: string, locatorStrategy: string): string => {
    let selector: string = "";
    switch (locatorType) {
        case CLASS_CHAIN:
            selector = `-ios class chain:${locatorStrategy}`;
            break;
        case PREDICATE_STRING:
            selector = `-ios predicate string:${locatorStrategy}`
            break;
        case ACCESSIBILITY_ID:
            selector = `~${locatorStrategy}`
            break;
        default:
            break;
    }
    return selector;
}

export default generateMobileLocator;