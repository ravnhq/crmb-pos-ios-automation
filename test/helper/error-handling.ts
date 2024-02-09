import reporter from "./reporter.js";


/**
 * @function executeWebAction High order function to execute a repetitive task of executing page object web actions with multiple params and report the step to alure with its test ID and message
 * @param baseWebAction The web action you want to execute on your page object
 * @param testid For allure reporting purposes
 * @param reportingMessage The reporting message you want to append to the allure step
 * @param args Additional arguments for the function to work properly
 */
export default async function executeWebAction(baseWebAction: (...args: any[]) => Promise<void>, testid: string, reportingMessage: string, ...args: any[]): Promise<void> {
    try {
      await baseWebAction(...args);
      reporter.addStep(testid, 'info', reportingMessage);
    } catch (error:any) {
      error.message = `${reportingMessage} - ${error.message}`;
      reporter.addStep(testid, 'error', reportingMessage);
      throw error;
    }
  }