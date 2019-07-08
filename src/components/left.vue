<template>
  <div class="col-sm-3 col-md-2 sidebar">
					<ul class="nav nav-sidebar">
					<router-link to="/list" tag="li">
						<a>
							Overview
							<span class="sr-only">(current)</span>
						</a>
					</router-link>
					<router-link to="/add" tag="li">
						<a>Reports</a>
					</router-link>
					<router-link to="/edit" tag="li">
						<a>Analytics</a>
					</router-link>
					<router-link to="/Export" tag="li">
						<a>Export</a>
					</router-link>
					</ul>
				</div>
</template>
<script>
export default {
	name:'left',
}
</script>
<style>

</style>
