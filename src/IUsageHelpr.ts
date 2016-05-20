/**
 * Styles that may be applied to logged help text.
 */
export interface ITextStyles {
    /**
     * Style for headers.
     */
    head: string;

    /**
     * Style for code.
     */
    code: string;

    /**
     * Style for code comments.
     */
    comment: string;

    /**
     * Style for italicized text.
     */
    italic: string;

    /**
     * No styles at all (plain text).
     */
    none: string;
}

/**
 * Text replacements, as originals with their replacements.
 */
export type IAliases = [string, string][];

/**
 * A single line of text to write to a console. If an Array, the first String is the 
 * message, and any others are aliases of UserWrappr styles to apply.
 */
export type IHelpLine = string | string[];

/**
 * Descriptions of APIs users may use, along with sample code.
 */
export interface IHelpOption {
    /**
     * A label for the API to research it by.
     */
    title: string;

    /**
     * A common description of the API.
     */
    description: string;

    /**
     * Code sample for usage of the API.
     */
    usage?: string;

    /**
     * API code samples with explanations.
     */
    examples?: IHelpExample[];
}

/**
 * Code sample for an API with an explanation.
 */
export interface IHelpExample {
    /**
     * An API code sample.
     */
    code: IHelpLine;

    /**
     * An explanation for the API code sample.
     */
    comment: IHelpLine;
}

/**
 * Settings to initialize a new IUsageHelpr.
 */
export interface IUsageHelprSettings {
    /**
     * Lines to display immediately upon starting.
     */
    openings?: IHelpLine[];

    /**
     * Descriptions of APIs users may use, along with sample code.
     */
    options?: {
        [i: string]: IHelpOption[];
    };

    /**
     * A message to log before and after a help options menu.
     */
    optionHelp?: string;

    /**
     * Text replacements for logs, as originals keying to their replacements.
     */
    aliases?: IAliases;

    /**
     * A utility Function to log messages, commonly console.log.
     */
    logger?: (...args: any[]) => any;
}

/**
 * A simple interactive text-based assistant to demonstrate common API uses.
 */
export interface IUsageHelpr {
    /**
     * Displays the root help menu dialog, which contains all the openings
     * for each help settings opening.
     */
    displayHelpMenu(): void;

    /**
     * Displays the texts of each help settings options, all surrounded by
     * instructions on how to focus on a group.
     */
    displayHelpOptions(): void;

    /**
     * Displays the summary for a help group of the given optionName.
     * 
     * @param optionName   The help group to display the summary of.
     */
    displayHelpGroupSummary(optionName: string): void;

    /**
     * Displays the full information on a help group of the given optionName.
     * 
     * @param optionName   The help group to display the information of.
     */
    displayHelpOption(optionName: string): void;
}
