using CefSharp;
using System.Globalization;

namespace CefApplicationTest
{
    public static class ScriptedMethods
    {
        /// <summary>
        /// The function is used to change the content status
        /// </summary>
        /// <param name="frame"></param>
        /// <param name="enable"></param>
        public static void DispatchContentStatusChanged(IFrame frame, bool enable)
        {
            var script = string.Format(
                CultureInfo.InvariantCulture, 
                "var event = new CustomEvent('ContentStatusChanged', {{detail:{{contentStatus: {0} }} }}); document.dispatchEvent(event);", 
                enable.ToString().ToLowerInvariant());
            frame.ExecuteJavaScriptAsync(script);
        }

        public static void DispatchLanguageChanged(IFrame frame, string selectedLanguage)
        {
            var script = string.Concat(
                "var event = new CustomEvent('LanguageChanged', {detail:", "\"", selectedLanguage, "\"", " }); document.dispatchEvent(event);");
            frame.ExecuteJavaScriptAsync(script);
        }
    }
}
