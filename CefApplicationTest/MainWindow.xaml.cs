using System;
using System.Windows;
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
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            if(!Cef.IsInitialized)
            {
                var cefConfigHelper = new CefConfigHelper();
                Cef.Initialize(cefConfigHelper.GetSettings());
            }

            InitChromeBrowser();

            mainGrid.Children.Add(chromeBrowser);
        }

        private void InitChromeBrowser()
        {
            var isDevMode = DevEnvironmentHelper.IsDevMode();

            var startupUrl = CefConfigHelper.GetStartupUrl(isDevMode);

            chromeBrowser.Address = startupUrl;
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            Cef.Shutdown();
        }
    }
}
