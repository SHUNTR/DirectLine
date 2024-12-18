<template>
	<header
		id="header"
		class="container"
	>
		<div class="header__block"></div>
		<div class="header__block">
			<nav class="header__nav">
				<ul class="header__list">
					<li
						class="header__item"
						v-for="Route in Routes"
					>
						<UILink :Route="Route" />
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script lang="ts" setup>
	import Routes from '~/route/routes'
</script>

<style></style>
