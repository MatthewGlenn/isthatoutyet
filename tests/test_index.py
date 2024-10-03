import pytest
from bs4 import BeautifulSoup

@pytest.fixture
def html_content():
    with open("index.html") as f:
        return f.read()

def test_title(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    assert soup.title.string == "Is that out yet?"

def test_heading(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    assert soup.h1.string == "Is that out yet?"
