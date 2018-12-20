using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CefApplicationTest
{
    public class Constants
    {
        public const string CefExecuteablePath = "CefSharp.BrowserSubprocess.exe";
        public const string FileProtocolSchemeName = "extendedfileprotocol";
        public const string FrontEndAppDir = "FrontEndApp";
        public const string DeveloperToolsRegistry = @"Software\Rockwell Automation\FrontEnd\DeveloperMachine";
        public const string DeveloperRegValueName = "ShowDeveloperTools";
        public const string DebugStartupUrl = "http://localhost:4200";
        public const string ReleaseStartupUrl = "extendedfileprotocol:\\local-pc\\index.html";
    }
}
