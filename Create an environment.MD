1. Open a terminal and navigate to your project folder.
2. In your terminal, type:

python -m venv .venv

## A folder named ".venv" will appear in your project. This directory is where your virtual environment and its dependencies are installed.

3. Activate your environment

## In your terminal, activate your environment with one of the following commands, depending on your operating system.

### Windows command prompt

.venv\Scripts\activate.bat

### Windows PowerShell

.venv\Scripts\Activate.ps1

### macOS and Linux

source .venv/bin/activate

## Once activated, you will see your environment name in parentheses before your prompt. "(.venv)"

5. Run your Streamlit app.

streamlit run app.py

### If this doesn't work, use the long-form command:

python -m streamlit run app.py

## To stop the Streamlit server, press Ctrl+C in the terminal.

### When you're done using this environment, return to your normal shell by typing:

deactivate

## Create new file in folder, in the terminal.

echo . > filename.py

## Delete file in folder, in the terminal.

del filename.py
