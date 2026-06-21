@echo off
echo ============================================
echo  Windows Cleanup Script (Run as Admin)
echo ============================================
echo.

echo [1/4] Stopping Windows Update service...
net stop wuauserv 2>nul
net stop bits 2>nul
echo Done.
echo.

echo [2/4] Deleting Windows Update Cache (SoftwareDistribution)...
if exist "%WINDIR%\SoftwareDistribution\Download" (
    takeown /f "%WINDIR%\SoftwareDistribution\Download" /r /d y >nul 2>&1
    icacls "%WINDIR%\SoftwareDistribution\Download" /grant Administrators:F /t /q >nul 2>&1
    rmdir /s /q "%WINDIR%\SoftwareDistribution\Download"
    mkdir "%WINDIR%\SoftwareDistribution\Download"
    echo Cleaned Windows Update cache.
) else (
    echo No Windows Update cache found.
)
echo.

echo [3/4] Cleaning Windows Temp files...
del /f /s /q "%WINDIR%\Temp\*.*" >nul 2>&1
for /d %%p in ("%WINDIR%\Temp\*") do rmdir /s /q "%%p" >nul 2>&1
echo Cleaned Windows Temp folder.
echo.

echo [4/4] Running DISM Component Cleanup...
DISM /Online /Cleanup-Image /StartComponentCleanup /ResetBase
echo.
echo DISM cleanup complete.
echo.

echo [Optional] Run these too:
echo   - cleanmgr /sageset:1  (pick what to clean)
echo   - cleanmgr /sagerun:1
echo.

echo ============================================
echo  All done! Close this window.
echo ============================================
pause
