<template>
	<div ref="modal" class="modal" tabindex="-1">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 v-if="isProcessing" class="modal-title">
						Validating import configuration...
					</h5>
					<h5 v-if="!isProcessing && errors.length > 0" class="modal-title">
						{{ errors.length }} errors found
					</h5>
					<h5 v-if="!isProcessing && errors.length === 0" class="modal-title">
						Validation complete
					</h5>
				</div>
				<div class="modal-body">
					<ul class="list-group">
						<li v-for="(error, i) in errors" :key="i" class="list-group-item">
							{{ error }}
						</li>
					</ul>
				</div>
				<div v-if="!isProcessing" class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="hideModal">
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
export default {
	name: "ImporterViewValidationModal",
	emits: ["close"],
	data: () => ({
		modal: null,
		isValidating: false,
		errors: [],
	}),
	computed: {
	},
	mounted() {
		this.modal = new Modal(this.$refs.modal);
	},
	beforeUnmount() {
		this.modal.dispose();
	},
	methods: {
		showModal() {
			this.modal.show();
		},
		hideModal() {
			this.modal.hide();
		},
	},
};
</script>

<style scoped lang="scss">
.spinner-border {
	width: 1rem;
	height: 1rem;
}

.d-flex {
	gap: 20px;
}
</style>
