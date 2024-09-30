import os
from dotenv import load_dotenv
import chromadb
from openai import OpenAI
from chromadb.utils import embedding_functions


OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
