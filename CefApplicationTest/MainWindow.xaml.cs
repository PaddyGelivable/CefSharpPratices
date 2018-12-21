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
        private ChromiumWebBrowser chromeBrowser = new ChromiumWebBrowser(); 

        public MainWindow()
        {
            InitializeComponent();

            Dispatcher.ShutdownStarted += OnShutdownStarted;
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
                //chromeBrowser.Address = "www.baidu.com";

                //chromeBrowser.LoadHtml("<html><body><h1>Hello world!</h1></body></html>", "http://example/");

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
