<div class="row" ng-app="Fa" ng-controller="cisDashboard">

  <div class="large-6 columns">
    <div class="large-6 columns text-right">
    <ul id="sort-drop" class="f-dropdown f-open-dropdown text-left" data-dropdown-content="" style="position: absolute; left: 13.3281px; top: 1892.75px;" aria-hidden="false">
      <li>
        <a ng-click="orderCourses('+title')" href="#">Ascending</a>
      </li>
      <li>
        <a ng-click="orderCourses('-title')" href="#">Descending</a>
      </li>
      <li>
        <a ng-click="orderCourses('-created')" href="#">Newest</a>
      </li>
      <li>
        <a ng-click="orderCourses('+created')" href="#">Oldest</a>
      </li>
    </ul>
      <a href="#" data-dropdown="sort-drop" class="tiny secondary radius button dropdown">Sort</a>
      <a class="fi-filter tiny secondary radius button" href="#">&nbsp;</a>
      <a class="fi-list-thumbnails tiny secondary radius button " href="#">&nbsp;</a>
      <a class="fi-thumbnails tiny secondary radius button" href="#">&nbsp;</a>
    </div>

  <div class="input-field col s12">
    <select>
      <option value="" selected>Sort</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>
  </div>

  <div class="row">
    <div class="col s12">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Course List</h4></li>
      <li ng-repeat="course in courses.list | orderBy:courseSortDefault" class="collection-item"><div>{{course.title}}<a href="{{course.nid}}" class="secondary-content"><i class="material-icons">send</i></a></div></li>
    </ul>
  </div>

</div><!-- cisDashboard -->
