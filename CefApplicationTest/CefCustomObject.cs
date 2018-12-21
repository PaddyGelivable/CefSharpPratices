using CefSharp;
using CefSharp.Wpf;
using System.Windows;

namespace CefApplicationTest
{
    public class CefCustomObject
    {
        // Declare a local instance of chromium and the main form in order to execute things from here in the main thread
        private static ChromiumWebBrowser instanceBrowser = null;
        // The form class needs to be changed according to yours
        private static Window instanceMainForm = null;


        public CefCustomObject(ChromiumWebBrowser originalBrowser, Window mainForm)
        {
            instanceBrowser = originalBrowser;
            instanceMainForm = mainForm;
        }

        public void ShowDevTools()
        {
            instanceBrowser.ShowDevTools();
        }
    }
}
