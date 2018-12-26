using System;
using System.IO;
using System.Windows;
using System.Windows.Threading;
using CefSharp;
using CefSharp.Wpf;

namespace CefApplicationTest
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        #region private variables

        private ChromiumWebBrowser chromeBrowser = new ChromiumWebBrowser();

        private bool enableContent = false;

        #endregion

        public MainWindow()
        {
            InitializeComponent();

            Dispatcher.ShutdownStarted += OnShutdownStarted;

            CefSharpSettings.LegacyJavascriptBindingEnabled = true;

            //Old method
            //chromeBrowser.RegisterJsObject("cefCustomObject", new CefCustomObject(chromeBrowser, this));

            //New method
            chromeBrowser.JavascriptObjectRepository.Register("cefCustomObject", new CefCustomObject(chromeBrowser, this), true);
        }

        private void OnShutdownStarted(object sender, EventArgs e)
        {
            Cef.Shutdown();
        }

        private void InitChromeBrowser()
        {
            var browserSettings = new BrowserSettings
            {
                FileAccessFromFileUrls = CefState.Enabled,
                UniversalAccessFromFileUrls = CefState.Enabled
            };
            chromeBrowser.BrowserSettings = browserSettings;

            chromeBrowser.IsBrowserInitializedChanged += ChromeBrowser_IsBrowserInitializedChanged;
        }

        private void ChromeBrowser_IsBrowserInitializedChanged(object sender, DependencyPropertyChangedEventArgs e)
        {
            if(chromeBrowser.IsInitialized)
            {
                //Case 1: Use the http
                //chromeBrowser.Address = "www.baidu.com";

                //Case 2: Load HTML file
                //chromeBrowser.LoadHtml("<html><body><h1>Hello world!</h1></body></html>", "http://example/");

                //Case 3: Use the Url
                var startupUrl = CefConfigHelper.GetStartupUrl(DevEnvironmentHelper.IsDevMode());

                chromeBrowser.Address = startupUrl;
            }
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            Cef.Shutdown();
        }

        private void OpenDev_Click(object sender, RoutedEventArgs e)
        {
            chromeBrowser.ShowDevTools();
        }

        private void EnableContent_Click(object sender, RoutedEventArgs e)
        {
            enableContent = !enableContent;
            ScriptedMethods.DispatchContentStatusChanged(chromeBrowser.GetFocusedFrame(), enableContent);
        }

        private void LocalizeContent_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Window_Initialized(object sender, EventArgs e)
        {
            if (!Cef.IsInitialized)
            {
                var cefConfigHelper = new CefConfigHelper();
                cefConfigHelper.SetCefSharpSettings();
                Cef.Initialize(cefConfigHelper.GetSettings());
            }

            InitChromeBrowser();

            mainGrid.Children.Add(chromeBrowser);
        }
    }
}
