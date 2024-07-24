---
title: Publications
layout: page
---

# Publications

{% for publication in site.scholar.bibliography %}
<div class="publication">
  <h2>{{ publication.title }}</h2>
  <p><strong>Authors:</strong> {{ publication.authors }}</p>
  <p><strong>Publication Date:</strong> {{ publication.date }}</p>
  <p><strong>Abstract:</strong> {{ publication.abstract }}</p>
  <p><a href="{{ publication.url }}" target="_blank">Read more</a></p>
</div>
{% endfor %}

<input type="text" id="searchInput" placeholder="Search publications..." onkeyup="filterPublications()">

<div id="publicationsList">
  {% for publication in site.scholar.bibliography %}
  <div class="publication" data-title="{{ publication.title | downcase }}">
    <h2>{{ publication.title }}</h2>
    <p><strong>Authors:</strong> {{ publication.authors }}</p>
    <p><strong>Publication Date:</strong> {{ publication.date }}</p>
    <p><strong>Abstract:</strong> {{ publication.abstract }}</p>
    <p><a href="{{ publication.url }}" target="_blank">Read more</a></p>
  </div>
  {% endfor %}
</div>

<script>
  function filterPublications() {
    var input, filter, publications, h2, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    publications = document.getElementById('publicationsList');
    publicationDivs = publications.getElementsByClassName('publication');
    
    for (i = 0; i < publicationDivs.length; i++) {
      h2 = publicationDivs[i].getElementsByTagName("h2")[0];
      txtValue = h2.textContent || h2.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        publicationDivs[i].style.display = "";
      } else {
        publicationDivs[i].style.display = "none";
      }
    }
  }
</script>

.publication {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.publication h2 {
  margin-top: 0;
}
