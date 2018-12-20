﻿using CefSharp.Wpf;
using System;
using System.IO;

namespace CefApplicationTest
{
    public class CefConfigHelper
    {
        #region public function

        public CefSettings GetSettings()
        {
            var settings = new CefSettings
            {
                BrowserSubprocessPath = GetCefExecutablePath()
            };

            settings.RegisterScheme(new CefSharp.CefCustomScheme
            {
                SchemeName = Constants.FileProtocolSchemeName,
                SchemeHandlerFactory = new ExtendedFileProtocolSchemeHandlerFactory()
            });

            return settings;
        }

        public static string GetStartupUrl(bool isDevMode)
        {
            return isDevMode ? Constants.DebugStartupUrl : Constants.ReleaseStartupUrl;
        }

        #endregion

        #region private function

        private string GetCefExecutablePath()
        {
            return Path.Combine(AppDomain.CurrentDomain.BaseDirectory, Constants.CefExecuteablePath);
        }

        #endregion
    }
}