using Microsoft.Win32;

namespace CefApplicationTest
{
    public class DevEnvironmentHelper
    {
        public static bool IsDevMode()
        {
            using (var developerMachine = Registry.CurrentUser.OpenSubKey(Constants.DeveloperToolsRegistry))
            {
                if (developerMachine == null)
                    return false;

                var value = developerMachine.GetValue(Constants.DeveloperRegValueName);

                return value is int && (int)value == 1;
            }
        }
    }
}
