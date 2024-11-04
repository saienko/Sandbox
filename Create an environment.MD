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

4. Install packages with pip and requirements.txt
pip install -r requirements.txt

## Create requirements.txt with pip freeze
pip freeze > requirements.txt

## List installed Python packages with pip list
pip list

5. Run your App.

python run app.py


