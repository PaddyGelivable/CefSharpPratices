using CefSharp;
using CefSharp.Wpf;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading;
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

        public void NewProject()
        {
            MessageBox.Show("New Project is called from WPF side!", "Cefsharp test project", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        public void OpenExistingProject()
        {
            MessageBox.Show("Open Existing Project is called from WPF side!", "Cefsharp test project", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        public void DiscoverProject()
        {
            MessageBox.Show("Discover Project is called from WPF side!", "Cefsharp test project", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        public void OpenProject(string projectName)
        {
            MessageBox.Show("Open " + projectName + " is called from WPF side!", "Cefsharp test project", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        /// <summary>
        /// Get the current recent solution list
        /// </summary>
        /// <returns></returns>
        public string GetSolutionList()
        {
            var projectList = new List<string>
            {
                "project1.ccwsln",
                "project2.ccwsln",
                "project3.ccwsln"
            };

            return JsonConvert.SerializeObject(projectList, Formatting.None);
        }

        /// <summary>
        /// Set the startup language
        /// </summary>
        /// <returns></returns>
        public string GetLanguage()
        {
            return JsonConvert.SerializeObject(Thread.CurrentThread.CurrentUICulture.Name, Formatting.None);
        }
    }
}
